const api_key = "981b234555267bb00b2b12bdc8a1c38f56ed998f93647e7805";
const content = document.getElementsByClassName("content")[0];
const form = document.getElementsByTagName("form")[0];
const submit_btn = document.getElementsByClassName("btn_submit")[0];
const prompt = document.getElementsByClassName("input_prompt")[0];

window.onload = (event) => {
  prompt.value = "";
};

const api = async (text, key) => {
  const response = await fetch(
    `https://api.velixs.com/nakiri?text=${text}&apikey=${key}`
  );
  return response.json();
};

function submit(e) {
  e.preventDefault();
  api(prompt.value, api_key)
    .then((value) => {
      content.innerHTML = value.data.reply;
    })

    .catch((err) => {
      alert(err);
    });
}

form.addEventListener("submit", (ev) => submit(ev));
