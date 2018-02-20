using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace RoamingClipboardDataLayerMig.Migrations
{
    public partial class InitialDatabaseSchema : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    IDCategory = table.Column<Guid>(nullable: false),
                    CategoryDescription = table.Column<string>(nullable: true),
                    CategoryName = table.Column<string>(type: "nvarchar(200)", nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    DateLastAssignedTo = table.Column<DateTime>(nullable: true),
                    DateLastEdited = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.IDCategory);
                });

            migrationBuilder.CreateTable(
                name: "Links",
                columns: table => new
                {
                    IDLink = table.Column<Guid>(nullable: false),
                    BestBefore = table.Column<DateTime>(nullable: true),
                    CategoryIDCategory = table.Column<Guid>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    DateLastEdited = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    UrlString = table.Column<string>(type: "nvarchar(2048)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Links", x => x.IDLink);
                    table.ForeignKey(
                        name: "FK_Links_Categories_CategoryIDCategory",
                        column: x => x.CategoryIDCategory,
                        principalTable: "Categories",
                        principalColumn: "IDCategory",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Links_CategoryIDCategory",
                table: "Links",
                column: "CategoryIDCategory");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Links");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
