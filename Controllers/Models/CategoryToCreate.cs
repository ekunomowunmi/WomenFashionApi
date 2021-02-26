using Microsoft.AspNetCore.Http;

namespace WomenFashionApi.Models
{
    public class CategoryToCreate
    {
        public string FormerProductId{get;set;}
        public string FormerName{get;set;}
        public string _Description{get;set;}
        public string FormerDescription{get;set;}
        public decimal FormerPrice{get;set;}
        public string FormerImagePath{get;set;}

        public string ObjectType{get;set;}
        public string FormerSize{get;set;}
        public string FormerCategoryType{get;set;}
        public decimal FormerNumber{get;set;}
        public string state { get; set; }
        public string _ProductId { get; set; }
        public string _Size { get; set; }
        public string _CategoryType { get; set; }
        public string _ImagePath { get; set; }
        public string _Name { get; set; }
        public IFormFile File { get; set; }
        public decimal _Number { get; set; }
        public decimal _Price { get; set; }
    }
}