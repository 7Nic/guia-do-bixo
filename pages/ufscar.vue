<template>
  <main>
    <sidebar :items="items" class="hide-sm" />
    <div class="content">
      <h1 class="display">
        UFSCar
      </h1>
      <dropdown :items="items" class="show-sm" />
      <nuxt-child :key="$route.params.id" />
    </div>
  </main>
</template>

<script>
import Sidebar from '@/components/sidebar'
import Dropdown from '@/components/dropdown'

export default {
  components: { Sidebar, Dropdown },
  scrollToTop: true,
  data () {
    return {
      items: [
        { name: 'Início', route: '/ufscar' },
        { name: 'Mapa Ufscar', route: '/ufscar/mapa' },
        { name: 'Ônibus', route: '/ufscar/onibus' },
        { name: 'Restaurante Universitário', route: '/ufscar/ru' },
        { name: 'Biblioteca Comunitária', route: '/ufscar/bco' },
        { name: 'Ginásio de Esportes', route: '/ufscar/ginasio' },
        { name: 'Banco do Brasil', route: '/ufscar/bb' },
        { name: 'Moradia Estudantil', route: '/ufscar/moradia' },
        { name: 'Pró-Reitoria de Graduação', route: '/ufscar/prograd' },
        { name: 'Pró-Reitoria de Assuntos Comunitários e Estudantis', route: '/ufscar/proace' },
        { name: 'Programa de Assistência Estudantil', route: '/ufscar/pae' },
        { name: 'Papelaria', route: '/ufscar/papelaria' },
        { name: 'Departamento de Atenção à Saúde', route: '/ufscar/deas' },
        { name: 'Rede wi-fi da Ufscar', route: '/ufscar/wifi' },
        { name: 'Encontros abu', route: '/ufscar/abu' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

$tablet-width: 768px;
$desktop-width: 1024px;

@mixin md {
  @media (max-width: #{$desktop-width}) {
    @content;
  }
}

main {
  display: flex;
  flex-direction: row;

  .hide-sm {
    display: block;
    @include md {
      display: none;
    }
  }

  .show-sm {
    display:none;
    @include md {
      display: block;
    }
  }
}

.content {
  margin-left: 24px;
  margin-right: 24px;
}

.page-enter-active, .page-leave-active {
  transition: all .4s cubic-bezier(.55,0,.1,1);
  opacity: 1;
}
.page-enter, .page-leave-active {
  opacity: 0;
  transition: all .4s cubic-bezier(.55,0,.1,1);
}

</style>
