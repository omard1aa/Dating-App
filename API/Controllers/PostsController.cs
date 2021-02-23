using API.Models;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace API.Controllers
{
    public class PostsController: BaseApiController
    {
        private readonly DataContext _context;

        public PostsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("posts")]
        public IEnumerable<Post> getPosts(){
            return _context.Posts;
        }

    }
}