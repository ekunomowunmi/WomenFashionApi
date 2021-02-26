using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Fashion;
using FashionApi.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;
using WomenFashionApi.Models;

namespace WomenFashionApi.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase {
        DataAccess dt;
        private Cloudinary _cloudinary;

        public CategoryController (DataAccess dt, IOptions<CloudinarySettings> config) {
            this.dt = dt;
            Account account = new Account (config.Value.CloudName, config.Value.ApiKey, config.Value.ApiSecret);
            _cloudinary = new Cloudinary (account);
        }
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Category>> Get () {
            // List<Category> categories = new List<Category>();
            // categories.AddRange(Category.Select(dt));
            return Category.Select (dt);
            // return new string[] { "yoo1", "value2" };
        }

        [HttpGet ("{category}")]
        public ActionResult<IEnumerable<Category>> Get (string category) {
            List<Category> categories = new List<Category> ();
            categories.AddRange (Category.Select (dt, category));
            return categories;
        }

        // GET api/values/5
        [HttpGet ("{category}/{id}")]
        public ActionResult<Category> Get (int id, string category) {
            List<Category> categories = new List<Category> ();
            categories.AddRange (Category.Select (dt, category));
            Category getItem = categories[id];
            //categories[id];
            return getItem;
        }

        // POST api/values
       // [HttpPost]
        // public IActionResult Post ([FromBody] CategoryToCreate category) {
        //     if (!ModelState.IsValid) {
        //         return BadRequest (ModelState);
        //     }
            
        //     /* if (!ModelState.IsValid) {
        //         return BadRequest (ModelState);
        //     } else { */

        //         if ((string) category.state == "0") {
        //             Category cate = new Category (dt, (string) category._ProductId, category._Name,
        //                 (string) category._Description, category._Price, (string) category._ImagePath,
        //                 (string) category._Size, (string) category._CategoryType, category._Number);

        //             var result = new ImageUploadResult ();
        //             //categories[id];
        //             if (category.File.Length > 0) {
        //                 using (var stream = category.File.OpenReadStream ()) {
        //                     var imageUploadParams = new ImageUploadParams () {
        //                     File = new FileDescription (category.File.FileName, stream)
        //                     };
        //                     result = _cloudinary.Upload (imageUploadParams);

        //                 }
        //             }

        //             cate._ImagePath = result.Uri.ToString ();
        //             cate.Save ();
        //             return Ok (category);
        //         }

        //         // else {
        //         //     return Ok ("Error, not available");
        //         // }
        //         else if ((string) category.state == "2") {

        //             // List<Category> categories = new List<Category> ();
        //             // categories.AddRange (Category.Select (dt));

        //             // foreach (Category cate in categories) {
        //             //     if (cate._ProductId == (string) category.Property ("FormerProductId") && cate._Name == (string) category.Property ("FormerName") &&
        //             //         cate._Description == (string) category.Property ("FormerDescription") && cate._Price == Decimal.Parse ((string) category.Property ("FormerPrice")) &&
        //             //         cate._ImagePath == (string) category.Property ("FormerImagePath") && cate._Size == (string) category.Property ("FormerSize") &&
        //             //         cate._CategoryType == (string) category.Property ("FormerCategoryType") && cate._Number == Decimal.Parse ((string) category.Property ("FormerNumber"))) {
        //             //         cate._ProductId = (string) category.Property ("_ProductId");
        //             //         cate._Name = (string) category.Property ("_Name");
        //             //         cate._Description = (string) category.Property ("_Description");
        //             //         cate._Price = Decimal.Parse ((string) category.Property ("_Price"));
        //             //         cate._ImagePath = (string) category.Property ("_ImagePath");
        //             //         cate._Size = (string) category.Property ("_Size");
        //             //         cate._CategoryType = (string) category.Property ("_CategoryType");
        //             //         cate._Number = Decimal.Parse ((string) category.Property ("_Number"));
        //             //         cate.Save ();
        //             //         return Ok (cate);
        //             //     }

        //             // }

        //              return Ok ("Update Operation");
        //         } else {
        //             return Ok ("Unknown Operation");
        //         }

        //         //else ends here
        //  // }
        // }

        // PUT api/values/5
        [HttpPut ("{id}")]
        public void Put (int id, [FromBody] string value) { }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public void Delete (int id) { }

         [HttpPost]
        public IActionResult Post([FromBody] JObject category)
        {
                if (!ModelState.IsValid) {
                return BadRequest (ModelState);
                } 
                else
                     {

                    if ((string) category.Property ("state") == "0") {
               Category cate = new Category(dt,(string) category.Property("_ProductId"),(string) category.Property("_Name"),
               (string) category.Property("_Description"),Decimal.Parse((string) category.Property("_Price")),(string) category.Property("_ImagePath"),
               (string) category.Property("_Size"),(string) category.Property("_CategoryType"),Decimal.Parse((string) category.Property("_Number")));
               cate.Save();
               return Ok(category);
                    }

                    // else {
                    //     return Ok ("Error, not available");
                    // }

                else  if ((string) category.Property ("state") == "2") {

                    List<Category> categories = new List<Category> ();
                    categories.AddRange (Category.Select (dt));

                        foreach(Category cate in categories)
                        {
                            if(cate._ProductId ==  (string) category.Property("FormerCategoryId") && cate._Name ==(string) category.Property("FormerName")
                            && cate._Description == (string) category.Property("FormerDescription") && cate._Price ==Decimal.Parse((string) category.Property("FormerPrice"))
                            && cate._ImagePath == (string) category.Property("FormerImagePath") && cate._Size == (string) category.Property("FormerSize")
                            && cate._CategoryType == (string) category.Property("FormerCategoryType") && cate._Number ==Decimal.Parse((string) category.Property("FormerNumber")))
                            {
                                cate._ProductId = (string) category.Property("_ProductId");
                                cate._Name = (string) category.Property("_Name");
                                cate._Description = (string) category.Property("_Description");
                                cate._Price = Decimal.Parse((string) category.Property("_Price"));
                                cate._ImagePath = (string) category.Property("_ImagePath");
                                cate._Size = (string) category.Property("_Size");
                                cate._CategoryType = (string) category.Property("_CategoryType");
                                cate._Number = Decimal.Parse((string) category.Property("_Number"));
                                cate.Save();
                                return Ok(cate);
                            }

                        }

                    return Ok("Update Operation");
                } 
                 else {
                    return Ok("Unknown Operation");
                }

                //else ends here
            }
        }
    }
}