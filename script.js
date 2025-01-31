function generateTable() {
    let traitCount = parseInt(document.getElementById("traitCount").value);
    let traitInput = document.getElementById("traitInput").value.trim();
    let traits = traitInput.split(",").map((t) => t.trim());
    let numCombinations = Math.pow(2, traitCount);

    // Validation
    if (traits.length !== numCombinations) {
      alert(
        `Invalid number of traits. You must enter ${numCombinations} combinations!`
      );
      return;
    }

    let tableHTML = "<table><tr><th></th>";
    traits.forEach((trait) => (tableHTML += `<th>${trait}</th>`));
    tableHTML += "</tr>";

    // Object to track the color assignments for each unique combination (normalized)
    let colorMap = {};
    let colorIndex = 0;

    // List of color classes to apply
    const colors = [
      "color1",
      "color2",
      "color3",
      "color4",
      "color5",
      "color6",
      "color7",
      "color8",
      "color9",
      "color10",
      "color11",
      "color12",
      "color13",
      "color14",
      "color15",
      "color16",
      "color17",
      "color18",
      "color19",
      "color20",
      "color21",
      "color22",
      "color23",
      "color24",
      "color25",
      "color26",
      "color27",
      "color28",
      "color29",
      "color30",
      "color31",
      "color32",
      "color33",
      "color34",
      "color35",
      "color36",
      "color37",
      "color38",
      "color39",
      "color40",
      "color41",
      "color42",
      "color43",
      "color44",
      "color45",
      "color46",
      "color47",
      "color48",
      "color49",
      "color50",
      "color51",
      "color52",
      "color53",
      "color54",
      "color55",
      "color56",
      "color57",
      "color58",
      "color59",
      "color60",
      "color61",
      "color62",
      "color63",
      "color64",
      "color65",
      "color66",
      "color67",
      "color68",
      "color69",
      "color70",
      "color71",
      "color72",
      "color73",
      "color74",
      "color75",
      "color76",
      "color77",
      "color78",
      "color79",
      "color80",
      "color81",
      "color82",
      "color83",
      "color84",
      "color85",
      "color86",
      "color87",
      "color88",
      "color89",
      "color90",
      "color91",
      "color92",
      "color93",
      "color94",
      "color95",
      "color96",
      "color97",
      "color98",
      "color99",
      "color100",
    ];

    traits.forEach((rowTrait) => {
      tableHTML += `<tr><th>${rowTrait}</th>`;
      traits.forEach((colTrait) => {
        // Normalize combination: sort the characters to treat "Af" and "fA" as the same
        let combination = normalizeCombination(rowTrait + colTrait);

        // If this combination hasn't been assigned a color yet, assign one
        if (!(combination in colorMap)) {
          colorMap[combination] = colors[colorIndex % colors.length];
          colorIndex++;
        }

        // Add the corresponding color class to the cell
        let cellClass = colorMap[combination];

        tableHTML += `<td class="${cellClass}">${rowTrait + colTrait}</td>`;
      });
      tableHTML += "</tr>";
    });

    tableHTML += "</table>";
    document.getElementById("punnettSquare").innerHTML = tableHTML;
  }

  // Normalize combination by sorting the characters
  function normalizeCombination(combination) {
    return combination.split("").sort().join("");
  }