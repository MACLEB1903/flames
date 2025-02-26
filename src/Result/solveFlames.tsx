export function solveFlames(personsInfo) {
  const flames = [
    "Friends",
    "Lovers",
    "Acceptance",
    "Marriage",
    "Enemies",
    "Sweet",
  ];

  function solveMessages(person, partner, personCount, totalCount) {
    let flamesMessages = {
      Friends: {
        mainMessage: "Friends or more?",
        personMessage: (
          <p>
            <b>{person}</b> sees <b>{partner}</b> only as a <b>friend</b>.
          </p>
        ),
      },
      Lovers: {
        mainMessage: "What a match!",
        personMessage: (
          <p>
            <b>{person}</b> is a <b>lover</b> of <b>{partner}</b>.
          </p>
        ),
      },
      Acceptance: {
        mainMessage: "What a connection!",
        personMessage: (
          <p>
            <b>{person}</b> <b>accepts</b> <b>{partner}</b>'s feelings.
          </p>
        ),
      },
      Marriage: {
        mainMessage: "Perfectly paired!",
        personMessage: (
          <p>
            <b>{person}</b> asks <b>{partner}</b> for <b>marriage</b>.
          </p>
        ),
      },
      Enemies: {
        mainMessage: "I'ts complicated.",
        personMessage: (
          <p>
            <b>{person}</b> sees <b>{partner}</b> as an <b>enemy</b>.
          </p>
        ),
      },
      Sweet: {
        mainMessage: "What a spark!",
        personMessage: (
          <p>
            <b>{person}</b> expresses <b>sweetness</b> to <b>{partner}</b>.
          </p>
        ),
      },
    };

    if (!totalCount) {
      const personMessage =
        flamesMessages[flames[(personCount - 1) % 6]].personMessage;
      return {
        personMessage,
      };
    }

    if (totalCount) {
      const result = flames[(totalCount - 1) % 6];
      const mainMessage = flamesMessages[result].mainMessage;
      return { result, mainMessage };
    }
  }

  //Converting Names
  const getName = (person) =>
    Object.values(person?.name).filter(Boolean).join(" ").trim();

  const [p1Name, p2Name] = [
    getName(personsInfo?.[1]),
    getName(personsInfo?.[2]),
  ];

  const p1NickName =
    p1Name.split(" ")[0].at(0).toUpperCase() +
    p1Name.split(" ")[0].slice(1).toUpperCase();
  const p2NickName =
    p2Name.split(" ")[0].at(0).toUpperCase() +
    p2Name.split(" ")[0].slice(1).toUpperCase();

  //Checking for union letters
  const similar = [...new Set(p1Name)].filter(
    (letter) => p2Name.includes(letter) && letter !== " "
  );

  //If no union letters
  if (similar.length === 0) {
    const result = "Incompatible";
    const mainMessage = "Hmm...";
    const p1Message = (
      <p>
        <b>{p1NickName}</b> is cleverly avoiding Cupid's arrows.
      </p>
    );
    const p2Message = (
      <p>
        <b>{p2NickName}</b>'s priorities does not align with{" "}
        <b>{p1NickName}.</b>
      </p>
    );
    return {
      result,
      mainMessage,
      p1Name,
      p2Name,
      similar,
      p1Message,
      p2Message,
    };
  }

  //Counting similar letters
  const unionCount = (person) =>
    person
      .split(" ")
      .join("")
      .split("")
      .filter((letter) => similar.includes(letter));

  const [p1Count, p2Count] = [
    unionCount(p1Name).length,
    unionCount(p2Name).length,
  ];

  const { result, mainMessage } = solveMessages(
    p1NickName,
    p2NickName,
    null,
    p1Count + p2Count
  );

  const { personMessage: p1Message } = solveMessages(
    p1NickName,
    p2NickName,
    p1Count,
    null
  );

  const { personMessage: p2Message } = solveMessages(
    p2NickName,
    p1NickName,
    p2Count,
    null
  );

  return {
    result,
    mainMessage,
    p1Name,
    p2Name,
    similar,
    p1Message,
    p2Message,
  };
}
