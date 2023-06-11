import cheerio from "cheerio";
import crypto from "crypto";

interface RowData {
  [key: string]: string;
}

interface filter {
  id: string;
  href: string;
  value: string;
  isSelected?: boolean;
}
export function htmlToJson(htmlData: string) {
  const $ = cheerio.load(htmlData);
  const tableRows = $("table.resultsarchive-table tbody tr");
  // Extract the table header row text
  const headerRowText = $("table.resultsarchive-table thead tr").text().trim();

  // Split the header row text into an array
  const headerRowArray = headerRowText
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item !== "");

  //console.log(headerRowArray); // Print the header row array
  const jsonData: RowData[] = [];

  tableRows.each((index, row) => {
    const columns = $(row).find("td");
    const rowData: RowData = {};

    columns.each((colIndex, column) => {
      if (colIndex == 0 || !headerRowArray[colIndex - 1]) return;
      const columnName = headerRowArray[colIndex - 1];
      const columnValue = $(column)
        .text()
        .trim()
        .replace(/\n\s+/g, " ")
        .replace(/'/g, "")
        .trim();
      rowData[columnName] = columnValue;
    });

    jsonData.push(rowData);
  });

  return jsonData;
}
export function getFilter(htmlData: string) {
  const $ = cheerio.load(htmlData);
  const filterYears: filter[] = [];
  const filterTypes: filter[] = [];
  const typeDetails: filter[] = [];
  const filters = $("div.resultsarchive-filter-wrap");
  filters.each((filterIndex, element) => {
    const liElements = $(element).find("li");
    liElements.each((liIndex, liItem) => {
      //console.log(liItem);
      if (filterIndex == 0) {
        const aElement = $(liItem).find("a");
        filterYears.push({
          id: aElement.attr("data-value") || "",
          href: aElement.attr("href") || "",
          value: $(liItem).find("span").text() || "",
          isSelected: $(aElement).hasClass("selected"),
        });
      }
      if (filterIndex == 1) {
        const aElement = $(liItem).find("a");
        filterTypes.push({
          id: aElement.attr("data-value") || "",
          href: $(liItem).find("a").attr("href") || "",
          value: $(liItem).find("span").text() || "",
          isSelected: $(aElement).hasClass("selected"),
        });
      }
      if (filterIndex == 2) {
        const aElement = $(liItem).find("a");
        typeDetails.push({
          id: aElement.attr("data-value") || "",
          href: $(liItem).find("a").attr("href") || "",
          value: $(liItem).find("span").text() || "",
          isSelected: $(aElement).hasClass("selected"),
        });
      }
    });
  });
  return {
    filterYears,
    filterTypes,
    typeDetails,
  };
}
export function formatString(inputString: string) {
  const regex = /'+'([A-Za-z\s]+)'+'/;
  const match = inputString.match(regex);
  const outputString = match ? match[1].trim() : "";
  return outputString;
}
export function generateMD5Hash(data: string): string {
  const hash = crypto.createHash("md5");
  hash.update(data);
  return hash.digest("hex");
}
