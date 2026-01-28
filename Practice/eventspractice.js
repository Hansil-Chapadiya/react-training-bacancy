parent.addEventListener("click", () => {
    console.log("Parent handler");
});

child.addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("Child handler");
});

