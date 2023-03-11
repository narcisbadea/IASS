using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IASS.DAL.Migrations
{
    public partial class addedAllergy : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AllergyCategories",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AllergyCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Allergies",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Allergies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Allergies_AllergyCategories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "AllergyCategories",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Allergies_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9d22ff52-1a0d-4832-997f-27e57e68ec9e",
                column: "ConcurrencyStamp",
                value: "42df34e2-64ee-4547-b37c-4072b2f166bd");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b1a678cf-d7a2-415a-9a8f-52d51e067e88",
                column: "ConcurrencyStamp",
                value: "78e5da76-abf8-4e3e-ae5e-3ce54064a177");

            migrationBuilder.CreateIndex(
                name: "IX_Allergies_CategoryId",
                table: "Allergies",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Allergies_UserId",
                table: "Allergies",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Allergies");

            migrationBuilder.DropTable(
                name: "AllergyCategories");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9d22ff52-1a0d-4832-997f-27e57e68ec9e",
                column: "ConcurrencyStamp",
                value: "b8a2fa17-f0ed-4c48-b723-8b8320ab1abe");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b1a678cf-d7a2-415a-9a8f-52d51e067e88",
                column: "ConcurrencyStamp",
                value: "5c14db0a-84f7-4600-92b8-53e6676cca69");
        }
    }
}
