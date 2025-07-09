/* This script updates the current year
and last modified date in the footer of the About Me page.
*/

document.addEventListener("DOMContentLoaded", (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById(
        "lastModified"
    ).textContent = `⋆˙⟡ Last Modified: ${lastModified}`;
});
