<template>
  <div>
    <section class="top" id="top">
      <div class="top__topic">
        <div class="top__topic--main">QuizWiki</div>
        <div class="top__topic--sub">
          <div>100万以上の記事を持つWikipedia。</div>
          <div>そこから無作為に抽出されたタイトルを導き出そう。</div>
          <div>さあ、どんな言葉との出会いが待っているかな？</div>
        </div>
        <div class="top__topic--button">
          <button @click="linkToInnerPage(router, '/start')">
            <div>Quizに挑む</div>
          </button>
        </div>
      </div>
    </section>
    <section class="about" id="about">
      <div class="about__topic">About</div>
      <div class="about__contents">
        <div class="about__text">
          <div class="about__text--main">子供のようなワクワクを。</div>
          <div class="about__text--sub">
            <div>「子供の頃は充実してたのに、大人になって退屈になった」</div>
            <div>という声をよく聞く。</div>
          </div>
          <div class="about__text--sub">
            <div>そんな大人たちに、新たな発見に出会ってほしい。</div>
            <div>そして、昔のようなワクワクを感じてもらい、</div>
            <div>活力に満ちた社会を作りたい。</div>
          </div>
          <div class="about__button">
            <button @click="linkToOuterPage(NOTE_URL)"><div>more</div></button>
          </div>
        </div>
        <div class="about__image">
          <img
            class="about__image--inner"
            src="../../public/images/home_children.png"
          />
        </div>
      </div>
    </section>
    <SectionFooter />
    <section class="howto" id="howto">
      <div class="howto__topic">How To</div>
      <div class="howto__contents">
        <HowToSection
          :sectionNumer="SectionNum.ONE"
          topic="①考える。"
          subTopic="関連ワードから記事のタイトルを類推しよう。"
        />
        <HowToSection
          :sectionNumer="SectionNum.TWO"
          topic="②もっと考える。"
          subTopic="さらに細かいヒントもチェックしよう。"
        />
        <HowToSection
          :sectionNumer="SectionNum.THREE"
          topic="③発見する。"
          subTopic="解答後、実際に記事を見に行こう。"
        />
        <HowToSection
          :sectionNumer="SectionNum.FOUR"
          topic="④世界が広がる。"
          subTopic="また一つ、あなたの世界が広がりました。"
        />
      </div>
    </section>
    <SectionFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

import { linkToInnerPage, linkToOuterPage } from "@/utils";
import { NOTE_URL } from "@/config";
import { SectionNum } from "@/types/Section";
import SectionFooter from "@/components/SectionFooter.vue";
import HowToSection from "@/components/HowToSection.vue";

export default defineComponent({
  name: "Home",
  components: {
    SectionFooter,
    HowToSection,
  },
  setup() {
    const router = useRouter();

    return {
      router,
      NOTE_URL,
      linkToOuterPage,
      linkToInnerPage,
      SectionNum,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../stylesheets/home";
</style>
