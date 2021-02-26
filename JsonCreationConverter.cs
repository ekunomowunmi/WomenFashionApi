using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Fashion;


namespace WomenFashionApi
{
    public abstract class JsonCreationConverter<T> : JsonConverter
    {
       public DataAccess dt;

        public override bool CanWrite => false;
        /// <summary>
        /// Create an instance of objectType, based properties in the JSON object
        /// </summary>
        /// <param name="objectType">type of object expected</param>
        /// <param name="jObject">contents of JSON object that will be deserialized</param>
        /// <returns></returns>

        protected abstract T Create(Type objectType, JObject jObject);

        public override bool CanConvert(Type objectType)
        {
            return typeof(T).IsAssignableFrom(objectType);
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            // Load JObject from stream
            if (reader.TokenType != JsonToken.Null)
            {
                JObject jObject = JObject.Load(reader);

                // Create target object based on JObject
                T target = Create(objectType, jObject);

                // Populate the object properties
                serializer.Populate(jObject.CreateReader(), target);

                return target;
            }
            return null;
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            throw new NotSupportedException("CustomCreationConverter should only be used while deserializing.");
        }
    }

    public class IocCustomCreationConverter : JsonCreationConverter<IActionParameter>
    {
        DataAccess dtAccess;
        public IocCustomCreationConverter(DataAccess dataAccess)
        {
            dtAccess=dataAccess;
        }
        protected override IActionParameter Create(Type objectType, JObject jObject)
        {
            var type = (string)jObject.Property("ObjectType");
            type = type == null ? (string)jObject.Property("objectType") : type;
            if (string.IsNullOrWhiteSpace(type))
            {
                string[] tps = objectType.Name.Split('.');
                if (tps.Length>0)
                {
                    type = tps[tps.Length - 1];
                }
            }
            if (!string.IsNullOrWhiteSpace(type))
            {
                switch (type)
                {
                    case "0":
                        return new Category(dtAccess);
                }
            }
            throw new ApplicationException(String.Format("The type {0} is not supported!", type));
        }
    }
}