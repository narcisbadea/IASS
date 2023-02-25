using AutoMapper;
using IASS.BLL.DTOs;
using IASS.DAL.Entities;

namespace IASS.BLL.Mapper;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<RegisterDTO, User>();
        CreateMap<LoginDTO, User>();
    }
}