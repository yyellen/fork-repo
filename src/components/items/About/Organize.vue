<template>
  <NavBar />
  <div class="bg-gray-100">
    <div id="bg" class="h-[50vh] md:h-screen">
      <h1 class="lg-title">Operational Structure</h1>
    </div>
    <div class="bgContainer pb-40">
      <div class="bg-config">
        <div>
          <h2 class="md-title"># Membership</h2>
          <p class="para">As an international platform open to organizations dealing with rural development or community-based
            development.<br>
            IRUP has sought to foster synergies in the implementation of their respective activities, as well as other
            activities planned under proposed vision.<br>
            Since its inception, an inclusive spirit has been fostered in recognition of the multi-sectoral and
            international dimensions of sustainable agriculture and rural development.</p>
        </div>
        <div>
          <h2 class="md-title"># Steering Committee</h2>
          <p class="para">The Steering Committee serves as the executive body acting on behalf of IRUP, and is responsible for governance and management functions.<br>

          The Steering Committee reviews and provides follows:<br>
          </p>
          <ol class="list-num-config">
            <li>guidance on the implementation of Rural-up activities, makes decisions on its own initiative and in response to requests from the assembly, reviews and approves membership applications.</li>
            <li>recommendations for consideration by the assembly, gives guidance to the IRUP Secretariat.</li>
            <li>assistance to catalyze partnership building and resource mobilization.</li>
          </ol>
        </div>
        <div>
          <h2 class="md-title"># Secretariat</h2>
          <p class="para">The secretariat supports IRUP and its members in achieving its missions and objectives and is responsible for undertaking the preparation of the Rural-up Conference and other related meetings, facilitating communication within Rural-up and with other stakeholders, promoting Collaborative Activities, carrying out awareness-raising and public outreach activities, and assisting in partnership-building.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../../NavBar.vue'
</script>

<style scoped>
#bg {
  background-image: url('../../../assets/img/about/大合照.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>