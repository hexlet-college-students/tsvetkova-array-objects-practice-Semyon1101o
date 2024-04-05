// task 1
function tableParsing(content) {
  const strArr = content.trim().split('\n').slice(1).map((el) => el.split(';'));
  function makeObj(arr) {
    return {
      name: arr[0], dev: arr[1], plRating: arr[2], appStoreRating: arr[3], rusLoads: arr[4], ausLoads: arr[5], indLoads: arr[6], engLoads: arr[7],
    };
  };

  const objInfo = strArr.map((el) => makeObj(el)); // parsing to object
  const topPlMessenger = parseInt(objInfo.map((el) => el.plRating));
  const topApsMessenger = parseInt(objInfo.map((el) => el.appStoreRating));
  const topIndLoads = Math.max(...objInfo.map((el) => el.indLoads));
  const worstIndLoads = Math.min(...objInfo.map((el) => el.indLoads));
  const ausLoads = objInfo.map((el) => el.ausLoads).sort();
  const topAppMessenger = Math.max(parseInt(objInfo.map((el) => el.appStoreRating)));
  console.log(`General top messenger: ${topPlMessenger} ${topApsMessenger}`); // test 1
  console.log(`Download count: Max count: ${topIndLoads}, Min count: ${worstIndLoads}`); // test 2
  console.log(ausLoads); // test 3
  console.log(); // test 4
  console.log(); // test 5
};

// task 2
function candidateAssessment(/* content */) {
}

// task 3
const actorRating = (/* content */) => {

};

export { tableParsing, candidateAssessment, actorRating };
