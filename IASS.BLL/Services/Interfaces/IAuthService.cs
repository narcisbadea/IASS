﻿using IASS.BLL.DTOs;
using IASS.DAL.Entities;
using System.IdentityModel.Tokens.Jwt;

namespace IASS.BLL.Services.Interfaces
{
    public interface IAuthService
    {
        Task<bool> CheckPassword(LoginDTO request);
        Task<JwtSecurityToken> GenerateToken(LoginDTO userLogin, bool rememberMe);
        Task<User> GetLoggedUser();
        Task<string> GetLoggedUserId();
        string GetLoggedUserName();
        Task<string> SignUp(RegisterDTO signup);
    }
}