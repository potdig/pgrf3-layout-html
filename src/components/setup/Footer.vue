<template>
  <div id="spotify">
    <span>Now playing: Music Title / Artist Name</span>
  </div>
  <div id="hashtag-guide">hashtag: <span>#PGRF</span></div>
</template>

<script setup></script>

<style lang="scss" scoped>
$spotifyHeight: 48px;

#spotify {
  display: flex;
  align-items: center;
  height: $spotifyHeight;
  line-height: $spotifyHeight;
  padding: 0 24px;
  background-color: white;
  border-radius: 24px;
}

#hashtag-guide {
  font-family: 'Staatliches', sans-serif;
  font-size: 2em;

  span {
    text-decoration: underline dashed;
  }
}
</style>
