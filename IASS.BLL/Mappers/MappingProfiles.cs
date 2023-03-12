using AutoMapper;
using IASS.BLL.DTOs;
using IASS.DAL.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IASS.BLL.Mapper;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<RegisterPatientUserDto, User>()
            .ForMember(dto => dto.Photo, opt => opt.MapFrom(opt => ConvertIFormFileToByteArray(opt.Photo)));

        CreateMap<RegisterDoctorUserDto, User>()
           .ForMember(dto => dto.Photo, opt => opt.MapFrom(opt => ConvertIFormFileToByteArray(opt.Photo)));

        CreateMap<XRayToPostDto, XRay>()
           .ForMember(dto => dto.Data, opt => opt.MapFrom(opt => ConvertIFormFileToByteArray(opt.Photo)))
           .ForMember(dto => dto.Id, opt => opt.MapFrom(opt => Guid.NewGuid().ToString()));

        CreateMap<XRay, XRayForUserDto>();

        CreateMap<LoginDTO, User>();
        CreateMap<Allergy, AllergyForUserDto>().ReverseMap();

        CreateMap<User, PatientProfileDto>()
            .ForMember(dto => dto.Name, opt => opt.MapFrom(opt =>opt.FirstName+" "+opt.LastName))
            .ForMember(dto => dto.Contact, opt => opt.MapFrom(opt => opt.Telephone));
    }

    public byte[]? ConvertIFormFileToByteArray(IFormFile file)
    {
        if(file == null)
        {
            return null;
        }
        using (var ms = new MemoryStream())
        {
            file.CopyTo(ms);
            return ms.ToArray();
        }
    }
}