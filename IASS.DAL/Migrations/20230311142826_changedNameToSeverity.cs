using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IASS.DAL.Migrations
{
    public partial class changedNameToSeverity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Allergies",
                newName: "Severity");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9d22ff52-1a0d-4832-997f-27e57e68ec9e",
                column: "ConcurrencyStamp",
                value: "ca43f278-d956-46fe-a4bf-5806d06e17b8");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b1a678cf-d7a2-415a-9a8f-52d51e067e88",
                column: "ConcurrencyStamp",
                value: "c91ae5bc-30ef-4aee-8407-90dfc125bc2d");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Severity",
                table: "Allergies",
                newName: "Name");

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
        }
    }
}
