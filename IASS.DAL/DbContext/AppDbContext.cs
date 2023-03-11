using IASS.DAL.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IASS.DAL.DbContext;

public class AppDbContext: IdentityDbContext<User, Role, string>
{
    private readonly IConfiguration _configuration;

    public DbSet<AllergyCategory> AllergyCategories { get; set; }
    public DbSet<Allergy> Allergies { get; set; }

    public AppDbContext(IConfiguration configuration) : base()
    {
        _configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(_configuration.GetConnectionString("Main"));
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        this.SeedRoles(builder);

    }

    private void SeedRoles(ModelBuilder builder)
    {
        builder.Entity<Role>().HasData(
            new Role() { Id = "9d22ff52-1a0d-4832-997f-27e57e68ec9e", Name = "User", NormalizedName = "USER" },
            new Role() { Id = "b1a678cf-d7a2-415a-9a8f-52d51e067e88", Name = "Admin", NormalizedName = "ADMIN" });
    }
}
