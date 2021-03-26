using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        Task<bool> SaveAllAsync();
        Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<AppUser> GetUserByIdAsync(int id);
        Task<AppUser> GetUserByUsername(string username);
        Task<IEnumerable<MemberDTO>> GetMembers();
        Task<MemberDTO> GetMember(string username);
        void Update(AppUser user);

        
    }
}