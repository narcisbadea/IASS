using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IASS.DAL.Migrations
{
    public partial class makePhotoNullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "Photo",
                table: "AspNetUsers",
                type: "varbinary(max)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9d22ff52-1a0d-4832-997f-27e57e68ec9e",
                column: "ConcurrencyStamp",
                value: "16106d1b-d908-46ef-ad09-9f7f23ab528c");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b1a678cf-d7a2-415a-9a8f-52d51e067e88",
                column: "ConcurrencyStamp",
                value: "ca158a3d-193f-4ab6-97e0-a6ef79daf100");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "Photo",
                table: "AspNetUsers",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0],
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9d22ff52-1a0d-4832-997f-27e57e68ec9e",
                column: "ConcurrencyStamp",
                value: "40b54964-0a1c-4d49-88e1-8dc228b3f499");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b1a678cf-d7a2-415a-9a8f-52d51e067e88",
                column: "ConcurrencyStamp",
                value: "5bffa1f2-fff4-4709-8d74-dc6851aaa3d2");
        }
    }
}
