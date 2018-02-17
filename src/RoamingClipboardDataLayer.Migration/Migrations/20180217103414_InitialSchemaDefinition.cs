using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace RoamingClipboardDataLayer.Migration.Migrations
{
    public partial class InitialSchemaDefinition : Microsoft.EntityFrameworkCore.Migrations.Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    IdCategory = table.Column<Guid>(nullable: false),
                    CategoryName = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    DateCreated = table.Column<DateTimeOffset>(nullable: false),
                    DateLastAssignedTo = table.Column<DateTimeOffset>(nullable: false),
                    DateLastEdited = table.Column<DateTimeOffset>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.IdCategory);
                });

            migrationBuilder.CreateTable(
                name: "Links",
                columns: table => new
                {
                    IdLink = table.Column<Guid>(nullable: false),
                    BestBefore = table.Column<TimeSpan>(nullable: true),
                    CategoryIdCategory = table.Column<Guid>(nullable: true),
                    DateCreated = table.Column<DateTimeOffset>(nullable: false),
                    DateLastEdited = table.Column<DateTimeOffset>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    UrlString = table.Column<string>(type: "nvarchar(2048)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Links", x => x.IdLink);
                    table.ForeignKey(
                        name: "FK_Links_Categories_CategoryIdCategory",
                        column: x => x.CategoryIdCategory,
                        principalTable: "Categories",
                        principalColumn: "IdCategory",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Links_CategoryIdCategory",
                table: "Links",
                column: "CategoryIdCategory");
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
