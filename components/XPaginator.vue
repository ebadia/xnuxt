<template>
  <div class="pt-5 pb-5 mb-5">
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled"><a class="page-link">Anterior</a></li>
        <li class="page-item active"><a class="page-link">1</a></li>
        <li class="page-item"><a class="page-link">2</a></li>
        <li class="page-item"><a class="page-link">3</a></li>
        <li class="page-item disabled"><a class="page-link">4</a></li>
        <li class="page-item disabled"><a class="page-link">5</a></li>
        <li class="page-item disabled"><a class="page-link">Siguiente</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "XPaginator"
    }
</script>

<style scoped>
  nav {
    font-size: 12px;
  }

  .page-item.active .page-link {
    background-color: black;
    border-color: black;
  }

  .page-item.disabled .page-link {
    color: #cccccc;
  }
</style>
