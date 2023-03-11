using AutoMapper;
using IASS.BLL.DTOs;
using IASS.DAL.Entities;
using Microsoft.AspNetCore.Http;

namespace IASS.BLL.Mapper;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<RegisterUserDto, User>()
            .ForMember(dto => dto.Photo, opt => opt.MapFrom(opt => ConvertIFormFileToByteArray(opt.Photo)));

        CreateMap<LoginDTO, User>();
        CreateMap<Allergy, AllergyForUserDto>().ReverseMap();
    }

    public byte[] ConvertIFormFileToByteArray(IFormFile file)
    {
        using (var ms = new MemoryStream())
        {
            file.CopyTo(ms);
            return ms.ToArray();
        }
    }
}