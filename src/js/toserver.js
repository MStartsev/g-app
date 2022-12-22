export default function postServer() {
  const url =
    'https://script.google.com/macros/s/AKfycbx9eFKQXavMnMh-p-ohpSV2vd3v5qL0o2TqCr9VfxvLuPFJyO8AUJtE7awTBy-M-eNv/exec';

  let res = [{ name: 'Gogi', work: 'Батя, я стараюсь!' }];

  console.info(base);

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    // credential: "same-origin",
    headers: {
      'Content-Type': 'application/json',
    },
    direct: 'fillow',
    reffererPolicy: 'no-refferer',
    body: JSON.stringify({ spec: base }),
  });
}

function getServer() {
  const url =
    'https://script.google.com/macros/s/AKfycbx9eFKQXavMnMh-p-ohpSV2vd3v5qL0o2TqCr9VfxvLuPFJyO8AUJtE7awTBy-M-eNv/exec';

  fetch(url)
    .then(d => d.json())
    .then(d => {
      document.getElementById('app').textContent = d[0].name;
      console.log(d);
    });
}

document.getElementById('btn').addEventListener('click', getServer);
document.getElementById('btn1').addEventListener('click', postServer);
