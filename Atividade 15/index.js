function aoSelecionar(obj) {
  if (obj.value == "nenhuma") return;

  let resp = confirm(
    "Realmente gostaria de abrir a pagina do curso " + obj.value + "?"
  );

  if (resp) {
    localStorage.setItem("curso", obj.value);
    document.meuForm.submit();
  } else obj.selectedIndex = 0;
}
