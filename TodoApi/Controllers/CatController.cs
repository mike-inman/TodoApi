using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;



namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    public class CatController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public IEnumerable<Cat> GetAll()
        {
            var list = new List<Cat>();
            list.Add(new Cat() { Name = "Lilly" });
            list.Add(new Cat() { Name = "Lucy" });
            return list;
        }

        [HttpGet("{name}")]
        public Cat Get(string name)
        {
            return new Cat() { Name = name };
        }

        [HttpPost]
        public Cat Insert([FromBody]Cat cat)
        {
            // write the new cat to database
            return cat;
        }

        [HttpPut("{name}")]
        public Cat Update(string name, [FromBody]Cat cat)
        {
            cat.Name = name;
            // write the updated cat to database
            return cat;
        }

        [HttpDelete("{name}")]
        public void Delete(string name)
        {
            // delete the cat from the database

        }
    }
}