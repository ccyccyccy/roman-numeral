function convert (x) {
  let [resultM, leftOverM] = convertM(x);
  let [resultD, leftOverD] = convertD(leftOverM);
  let [resultC, leftOverC] = convertC(leftOverD);
  let [resultL, leftOverL] = convertL(leftOverC);
  let [resultX, leftOverX] = convertX(leftOverL);
  let [resultV, leftOverV] = convertV(leftOverX);
  let [resultI, leftOverI] = convertI(leftOverV);
  
  return resultM + resultD + resultC + resultL + resultX + resultV + resultI;
}

function convertAny(x, mainMod, threshold, mainRoman, extraRoman) {
  let result = '';
  let numberOfMainRoman = Math.floor(x / mainMod);
  for(let i = 0; i < numberOfMainRoman; i++) {
    result += mainRoman;
  }
  let leftOver = x % mainMod;
  if(leftOver >= threshold) {
    leftOver -= threshold
    result += (extraRoman + mainRoman);
  }
  return [result, leftOver];
}

function convertM(x) {
  return convertAny(x, 1000, 900, 'M', 'C');
}

function convertD(x) {
  return convertAny(x, 500, 400, 'D', 'C');
}

function convertC(x) {
  return convertAny(x, 100, 90, 'C', 'X');
}

function convertL(x) {
  return convertAny(x, 50, 40, 'L', 'X');
}

function convertX(x) {
  return convertAny(x, 10, 9, 'X', 'I');
}

function convertV(x) {
  return convertAny(x, 5, 4, 'V', 'I');
}

function convertI(x) {
  return convertAny(x, 1, 99999, 'I', 'NOT SUPPOSED TO SEE THIS');
}

export default convert;