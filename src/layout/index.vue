<template>
    <div class="layout_container">
        <div class="layout_slider">
            <Logo></Logo>
        </div>
        <div class="layout_tabbar">456</div>
        <div class="layout_main">789</div>
    </div>
</template>

<scripte setup lang="ts">
import Logo from './logo/index.vue'
</scripte>

<style scoped lang="scss">
.layout_container{
    width:100%;
    height:100vh;
    background:red ;
    .layout_slider {
        width: $base-menu-width;
        height:100vh;
        background: $base-menu-background;
    }
    .layout_tabbar {
        position:fixed;
        width:calc(100% -$base-menu-width);
        height:$base-tabbar-height;
        background:cyan;
        top:0px;
        left: $base-menu-width;
    }
    .layout_main{
        position: absolute;
        width:calc(100% -$base-menu-width);
        height:calc(100vh-$base-tabbar-height);
        background-color:yellowgreen;
        left:$base-menu-width;
        top:$base-tabbar-height;
        padding: 20px;
        overflow: auto;
    }
}
</style>