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
          <button @click="linkToInnerPage('/start')">
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
    <section class="section-footer">
      <div class="section-footer__button">
        <button @click="linkToInnerPage('/start')">
          <div>Quizに挑む</div>
        </button>
      </div>
    </section>
    <section class="howto" id="howto">
      <div class="howto__topic">How To</div>
      <div class="howto__contents">
        <!-- ここはコンポーネントで切り出す -->
        <div class="howto__section howto__section--one">
          <div class="howto__section--inner">
            <div class="howto__section--topic">①考える。</div>
            <div class="howto__section--image">
              <img src="../../public/images/about_1_white.png" alt="" />
            </div>
            <div class="howto__section--subtopic">
              関連ワードから記事のタイトルを類推しよう。
            </div>
          </div>
        </div>
        <div class="howto__section howto__section--two">
          <div class="howto__section--inner">
            <div class="howto__section--topic">②もっと考える。</div>
            <div class="howto__section--image">
              <img src="../../public/images/about_2_white.png" alt="" />
            </div>
            <div class="howto__section--subtopic">
              さらに細かいヒントもチェックしよう。
            </div>
          </div>
        </div>
        <div class="howto__section howto__section--three">
          <div class="howto__section--inner">
            <div class="howto__section--topic howto__section--topic--under">
              ③発見する。
            </div>
            <div class="howto__section--image">
              <img src="../../public/images/about_3_white.png" alt="" />
            </div>
            <div class="howto__section--subtopic">
              解答後、実際に記事を見に行こう。
            </div>
          </div>
        </div>
        <div class="howto__section howto__section--four">
          <div class="howto__section--inner">
            <div class="howto__section--topic howto__section--topic--under">
              ④世界が広がる。
            </div>
            <div class="howto__section--image">
              <img src="../../public/images/about_4_white.png" alt="" />
            </div>
            <div class="howto__section--subtopic">
              また一つ、あなたの世界が広がりました。
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ここはコンポーネントで切り出す -->
    <section class="section-footer">
      <div class="section-footer__button">
        <button @click="linkToInnerPage('/start')">
          <div>Quizに挑む</div>
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter, RouteLocationRaw } from "vue-router";

import { linkToOuterPage } from "@/utils";
import { NOTE_URL } from "@/config";

export default defineComponent({
  name: "Home",
  setup() {
    const router = useRouter();

    const linkToInnerPage = (route: RouteLocationRaw) => {
      router.push(route);
    };

    return {
      NOTE_URL,
      linkToOuterPage,
      linkToInnerPage,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../stylesheets/home";
</style>
