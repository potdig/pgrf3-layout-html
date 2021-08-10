<template>
  <img id="logo-ome" src="/assets/pgrf/images/ome_logo.png" alt="OME" />
  <span id="presents">presents</span>
  <img
    id="logo-pgrf"
    src="/assets/pgrf/images/pgrf_logo_simple.png"
    alt="PGRF"
  />
  <div id="now" class="time">12:34</div>
</template>

<script setup></script>

<style lang="scss" scoped>
#logo-ome,
#logo-pgrf {
  height: 100px;
}

#presents {
  margin: 0 0.5em;
  font-family: 'Staatliches', sans-serif;
  font-size: 2em;
}

#now {
  font-size: 2em;
  margin-left: auto;
}
</style>
