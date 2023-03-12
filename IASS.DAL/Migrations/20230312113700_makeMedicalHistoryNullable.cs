using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IASS.DAL.Migrations
{
    public partial class makeMedicalHistoryNullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "MedicalHistory",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9d22ff52-1a0d-4832-997f-27e57e68ec9e",
                column: "ConcurrencyStamp",
                value: "d8f5d808-f9c4-4df7-943f-522b652d1867");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b1a678cf-d7a2-415a-9a8f-52d51e067e88",
                column: "ConcurrencyStamp",
                value: "0037ad54-57ae-4ca8-80df-d2e46cf3e278");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "MedicalHistory",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9d22ff52-1a0d-4832-997f-27e57e68ec9e",
                column: "ConcurrencyStamp",
                value: "170b37f0-1b94-498e-8917-05b39eb77bfa");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b1a678cf-d7a2-415a-9a8f-52d51e067e88",
                column: "ConcurrencyStamp",
                value: "398efb15-4c0e-4928-bb72-3cd1f849e847");
        }
    }
}
