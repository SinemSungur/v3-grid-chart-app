<template>
  <div class="home">
    <div class="home__content">
      <h1 class="title">SEO.DO Interview</h1>
    </div>
    <GridContainer></GridContainer>
    <Modal></Modal>
  </div>
</template>

<script>
import GridContainer from "../components/GridContainer.vue";
import Modal from "../components/Modal.vue";
export default {
  name: "Home",
  components: {
    GridContainer,
    Modal,
  },
};
</script>
<style>
.home {
  height: 100%;
  background-color: #fff;
  border-radius: 6px;
  margin: 1rem;
  box-shadow: 0px 2px 6px rgb(49 49 77 / 4%);
}

.home__content {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.home__content .title {
  color: #6b6b99;
  margin: 1rem 0 1.2rem 1.2rem;
}

button {
  margin-right: 1.5rem;
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: #6b6b99;
}
</style>