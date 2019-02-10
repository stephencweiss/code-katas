function freqQuery(queries) {
  debugger;
  const map = new Map();
  const freq = new Map();
  const result = [];

  queries.forEach(que => {
    const q = que[0];
    const v = que[1];

    switch(q) {
      case 1:
        const mapValue = map.get(v);
        const value = mapValue ? mapValue + 1 : 1;
        const freqValue = freq.get(value);
        const freqPrevValue = freq.get(value - 1);

        const curArr = freqValue ? freqValue : [];
        curArr.push(v);

        if(freqPrevValue) {
          const idx = freqPrevValue.indexOf(v);
          freqPrevValue.splice(idx, 1);
          freq.set(value - 1, freqPrevValue);
        }

        map.set(v, value);
        freq.set(value, curArr);
        break;
      case 2:
        if(map.has(v) && map.get(v) !== 0) {
          const value = map.get(v) - 1;
          const freqValue = freq.get(value);
          const freqPrevValue = freq.get(value + 1);

          const curArr = freqValue ? freqValue : [];
          curArr.push(v);

          const idx = freqPrevValue.indexOf(v);
          freqPrevValue.splice(idx, 1);
          freq.set(value + 1, freqPrevValue);

          map.set(v, value);
          freq.set(value, curArr);
        }
        break;
      case 3:
        if(freq.get(v) && freq.get(v).length > 0) result.push(1);
        else result.push(0);
        break;
    }
  });

  return result;
}


const queries = [[1,3],[1,4],[1,3],[2,3],[3,1]]
console.log(freqQuery(queries))