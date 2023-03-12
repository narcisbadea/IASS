using AutoMapper;
using IASS.BLL.DTOs;
using IASS.BLL.Services.Interfaces;
using IASS.DAL.DbContext;
using IASS.DAL.Entities;
using IASS.DAL.Repositories.Implementation;
using IASS.DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IASS.BLL.Services.Implementation;

public class XRayService : IXRayService
{
    private readonly IXRayRepository _xRayRepository;
    private readonly IXRayTypeRepository _xrayTypeRepository;
    private readonly IUserRepository _userRepository;
    private readonly IAuthService authService;
    private readonly IMapper _mapper;

    public XRayService(IXRayRepository xRayRepository, IAuthService authService, IMapper mapper, IUserService userService, IXRayTypeService xrayTypeService, IXRayTypeRepository xrayTypeRepository, IUserRepository userRepository)
    {
        _xRayRepository = xRayRepository;
        this.authService = authService;
        _mapper = mapper;
        _xrayTypeRepository = xrayTypeRepository;
        _userRepository = userRepository;
    }

    public async Task<IEnumerable<XRayForUserDto>> GetAllXrayByUserId(string userId)
    {
        var xrays = await _xRayRepository.GetAllXrayByUserId(userId);
        return _mapper.Map<IEnumerable<XRayForUserDto>>(xrays);
    }

    public async Task<byte[]> GetPhotoByXRayId(string xrayId)
    {
        return await _xRayRepository.GetPhotoByXRayId(xrayId);
    }

    public async Task PostXray(XRayToPostDto xRay, string userId)
    {
        var xray = _mapper.Map<XRay>(xRay);
        var user = await _userRepository.GetUserById(userId);
        xray.User = user;

        var xraytype = await _xrayTypeRepository.GetXRayById(xRay.TypeId);
        xray.Type = xraytype;

        await _xRayRepository.PostXray(xray);
    }

    public async Task DeleteXray(string xRay) => await _xRayRepository.DeleteXray(xRay);

}
