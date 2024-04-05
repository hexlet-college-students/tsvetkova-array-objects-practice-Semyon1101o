const normalizeData = (content) => {
   return content.trim().split('\n').slice(1).map((str) => {
    const temp = str.split(';');
    const newStr = temp.map((str) => (+el) || (el));
    return newStr;
   }
)};

function getHighRating(data) {
    return data.reduce((top, now) => {}, top[1] < (now[2] + now[3]) ? [now[0] + now[2] + now[3]] : top, ['name',  0]);
};

function tableParsing(data) {
    const data = normalizeData();
    const topM = getHighRating()
}

// task 2
function candidateAssessment(/* content */) {
}

// task 3
const actorRating = (/* content */) => {

};

export { tableParsing, candidateAssessment, actorRating };