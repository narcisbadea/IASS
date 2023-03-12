using IASS.BLL.Services.Interfaces;
using IASS.DAL.Entities;
using IASS.DAL.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IASS.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AllergyCategoryController : ControllerBase
{
    private readonly IAllergyCategoryService _allergyCategoryService;

    public AllergyCategoryController(IAllergyCategoryService allergyCategoryService)
    {
        _allergyCategoryService = allergyCategoryService;
    }

    [HttpGet("all")]
    public async Task<IEnumerable<AllergyCategory>> GetAll()
    {
        return await _allergyCategoryService.GetAllAllergyCategories();
    }
}
