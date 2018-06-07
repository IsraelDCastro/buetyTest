<template>
  <div class="hello">
    <div class="">
      <Test></Test>
    </div>
    <div class="">
      <div class="row">
        <b-collapse :open="false" class="similar" v-for="test in tests" :key="test.id">
          <div name="fade" class="animated fadeIn">
            <div class="notification">
              <div class="content">
                  <h3>
                      {{ test.title }}
                  </h3>
                  <p>
                    {{ test.description }}
                  </p>
                  <p>{{ test.price }}</p>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ipsam a nulla eos illum delectus laborum maxime, quasi sequi ratione dicta mollitia, magnam itaque rerum repudiandae animi expedita. Repellendus, unde!</p>
          </div>
          <vs-button vs-type="primary-line-down" slot="trigger" v-on:click="show = !show">Click me!</vs-button>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import Test from '@/components/Test'

export default {
  components: { Test },
  name: 'HelloWorld',
  data () {
    return {
      tests:[
        {id: 1, title: 'Test', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis.', price: 80},
        {id: 2, title: 'Test2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis.', price: 80},
        {id: 3, title: 'Test3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis.', price: 80},
        {id: 4, title: 'Test4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis.', price: 80},
        {id: 5, title: 'Test5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis.', price: 80},
        {id: 6, title: 'Test6', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis.', price: 80},
        {id: 7, title: 'Test7', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis.', price: 80},
        {id: 8, title: 'Test8', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis.', price: 80},
        {id: 9, title: 'Test9', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis.', price: 80},
        {id: 10, title: 'Test10', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis.', price: 80},
        {id: 11, title: 'Test11', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis.', price: 80},
        {id: 12, title: 'Test12', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis.', price: 80}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.similar{
  width: 33.3%;
  display: inline-grid;
  padding: 0 5px;
}
</style>
