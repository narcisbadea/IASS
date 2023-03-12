using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IASS.DAL.Migrations
{
    public partial class addDoctorPatient : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "doctorPatients",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PatientId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    DoctorId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_doctorPatients", x => x.Id);
                    table.ForeignKey(
                        name: "FK_doctorPatients_AspNetUsers_DoctorId",
                        column: x => x.DoctorId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_doctorPatients_AspNetUsers_PatientId",
                        column: x => x.PatientId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Doctors",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    RegisterCode = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctors", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Doctors_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9d22ff52-1a0d-4832-997f-27e57e68ec9e",
                column: "ConcurrencyStamp",
                value: "f7fc67bb-1936-4637-8ad2-c7e66acd4b8e");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b1a678cf-d7a2-415a-9a8f-52d51e067e88",
                column: "ConcurrencyStamp",
                value: "b3c12a30-57c8-41ae-847c-4c36b6555e26");

            migrationBuilder.CreateIndex(
                name: "IX_doctorPatients_DoctorId",
                table: "doctorPatients",
                column: "DoctorId");

            migrationBuilder.CreateIndex(
                name: "IX_doctorPatients_PatientId",
                table: "doctorPatients",
                column: "PatientId");

            migrationBuilder.CreateIndex(
                name: "IX_Doctors_UserId",
                table: "Doctors",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "doctorPatients");

            migrationBuilder.DropTable(
                name: "Doctors");

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
    }
}
