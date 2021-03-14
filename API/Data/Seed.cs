using System.Threading.Tasks;
using API.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using API.Entities;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using Newtonsoft.Json;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUserData (DataContext context)
        {
            if(await context.Users.AnyAsync()) return;

            var UserData = await System.IO.File.ReadAllTextAsync("Data/UsersData.json");

            var users = JsonConvert.DeserializeObject<List<AppUser>>(UserData);

            foreach(var user in users)
            {
                using var hmac = new HMACSHA512();
                user.UserName = user.UserName.ToLower();
                user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("password"));
                user.PasswordSalt = hmac.Key;
                
                context.Add(user);
            }
            await context.SaveChangesAsync();
        } 
    }
}