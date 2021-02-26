using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Fashion;
using Newtonsoft.Json.Linq;
using System.IO;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Options;
using FashionApi.Helpers;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace WomenFashionApi.Controllers
{
     [Route("api/[controller]")]
    [ApiController]

    public class UploadController:ControllerBase
    {
        private readonly IHostingEnvironment host;
        private readonly DataAccess dt;
        private readonly IOptions<CloudinarySettings> config;
        private Cloudinary _cloudinary;

        public UploadController(IHostingEnvironment host, DataAccess dt, IOptions<CloudinarySettings> config)
        {
            this.host = host;
            this.dt = dt;
            this.config = config;
            Account account = new Account(config.Value.CloudName, config.Value.ApiKey, config.Value.ApiSecret);
            _cloudinary = new Cloudinary(account);
        }
        [HttpPost, DisableRequestSizeLimit]
public IActionResult Uploader()
{
    try
    {
    
        var file = Request.Form.Files[0];
        var folderName = Path.Combine("Resources", "Images");
        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
 
        if (file.Length > 0)
        {
            var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
            var fullPath = Path.Combine(pathToSave, fileName);
            var dbPath = Path.Combine(folderName, fileName);
 
            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                //file.CopyTo(stream);

            }
 
            return Ok(new { dbPath });
        }
        else
        {
            return BadRequest();
        }
    }
    catch (Exception ex)
    {
        return StatusCode(500, "Internal server error \n"+ex.InnerException);
    }
}


//         public IActionResult GetString(string category){
//  List<Category> categories = new List<Category> ();
//  categories.AddRange(Category.Select(dt,category));
//  Category getItemm = categories.FirstOrDefault((c)=> c._CategoryId == category);
//         }
        [HttpPost("file/{category}/{productId}")]
        public async Task<IActionResult> Upload(string productId, string category, IFormFile file){
             List<Category> categories = new List<Category> ();
            categories.AddRange(Category.Select(dt,category));
            Category getItem = categories.Find((catID) => catID._ProductId == productId);
           // Category getItem = categories.LastOrDefault((catId) => catId._CategoryId == productId);
            // Category getItem = categories[productId];
            var result = new ImageUploadResult();
             //categories[id];
            if (file.Length > 0)
            {
                 using (var stream = file.OpenReadStream()){
                     var imageUploadParams = new ImageUploadParams()
                     {
                         File = new FileDescription(file.FileName,stream)
                     };
                     result = _cloudinary.Upload(imageUploadParams);

                 }
            }

                
                 getItem._ImagePath = result.Uri.ToString();
                 //getItem._PublicId = result.PublicId;
                 getItem.Save();
                
                 return Ok();

        }
        /* [HttpPost("file/{category}/{productId}")]
        public async Task<IActionResult> Upload(int productId, string category, IFormFile file){
            var uploadFolderPath = Path.Combine(host.WebRootPath,"images");
             List<Category> categories = new List<Category> ();
            categories.AddRange(Category.Select(dt,category));
            Category getItem = categories[productId];
            //var result = new ImageUploadResult();
             //categories[id];
            if (!Directory.Exists(uploadFolderPath))
                Directory.CreateDirectory(uploadFolderPath);

                 var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
                 var filePath = Path.Combine(uploadFolderPath,fileName);

                 using (var stream = new FileStream(filePath,FileMode.Create)){
                     await file.CopyToAsync(stream);
                 }
                 getItem._ImagePath = filePath;
                 getItem.Save();
                
                 return Ok();

        } */


    }
}