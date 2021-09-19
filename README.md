# Welcome to QuizWiki

![logo (1)](https://user-images.githubusercontent.com/54055746/128136181-dabc5b10-c902-4b55-a653-2f16a6610651.png)

## 本番環境リンク

https://www.quiz-wiki.com/

<br><br>

## 概要

QuizWiki は
`「当たり前の毎日を過ごしている大人たちに新しい発見を提供することで、子供の頃のようなワクワクを呼び覚まし、社会に活力を与える」`
というコンセプトのもと、人生に飽き飽きしている人たちに新しい発見を届けるサービスです。

作品の紹介記事は[こちら](https://note.com/wadeee/n/n2d045697a859)

<br><br>

## アーキテクチャ

![QuizWiki_アーキテクチャ](https://user-images.githubusercontent.com/54055746/128136366-94dcb35c-697d-415b-98b4-6af5beb5f791.png)

### 各種リポジトリ

- フロントエンド: ここ
- バックエンド: https://github.com/TakafumiWada/wiki-quiz-backend
- フロントエンド(インフラ): https://github.com/TakafumiWada/terraform-wiki-quiz-frontend
- バックエンド(インフラ): https://github.com/TakafumiWada/terraform-wiki-quiz-backend
- API 設計書: https://github.com/TakafumiWada/wiki-quiz-api-spec
  <br><br>

## wiki-quiz-frontend

### 説明

QuizWiki のフロントエンドです。
記事データを取得 API の取得からゲームのプレイまでを処理します。

### バージョン

```txt
vue : ^2.6.11
vue-router : ^3.2.0
vuex : ^3.4.0
```

### セットアップ・ローカル起動

```
yarn install
yarn serve
```

<br><br><br>
以下は[note 記事](https://note.com/wadeee/n/n2d045697a859)より引用です。

## 制作背景、届けたい価値

このプロダクトを通じて皆さんに届けたいものは、結論から申し上げると、
**「子供の頃のようなワクワク」** です。<br><br><br>

なぜこのような結論に至ったか話していきます…<br><br><br>

「大人になるにつれて人生退屈になってくる」という話よく聞きますよね..
僕も様々な場所で耳にするのですが、それって何故だと思いますか？<br>

僕は子供と大人の違いとしてひとつ挙げられるのが、 **新しい発見の量** だと考えています。<br><br><br>

子供の頃って何もかもが新鮮で、新しい発見の連続ですよね！
そんな毎日、楽しいに決まっています。<br>

一方、大人になってからはどうでしょう。
毎日同じような一日を当たり前のように過ごす...<br>

こんな大人も多いと思います。
そういった毎日を過ごしていたら当然新しい発見なんか無いため、退屈になるのも無理ありません。<br><br><br>

以上の話を仮説として設定し、この課題を解決するサービスを作るために、コンセプトを以下のようにしました。<br>

```
「当たり前の毎日を過ごしている大人たちに新しい発見を提供することで、子供の頃のようなワクワクを呼び覚まし、社会に活力を与える」
```

<br><br>

QuizWiki で遊んでみた方は既に分かると思いますが、正直このクイズを答えられる確率は 1%もないと思います。
そもそも、出題されている記事の存在自体を知らないケースがほとんどですから。(笑)<br>

このサービスはクイズに正解してもらうことが目的ではなく、
**全く知らない人物や出来事について考えてもらい、新しい発見をしてもらうこと** で先ほど掲げたコンセプトを叶えるサービスとなっています。<br>

答えが合っているかではなく、答えの解説を確認する行為が、このサービスにとって 1 番重要なのです。<br><br><br>

また、クイズ形式にしたのも理由があります。<br>

新しい発見を得ること自体は、もちろん本を読んだりインプットをすることで可能だと思いますが、
このサービスの思いを届けたい人は、そういった自己研鑽をする時間がないほど忙しかったり、あまり気が乗らない人をペルソナにしています。<br><br><br>

なので、そういった人たちにも気軽に触ってもらうためにはどうすればいいかと考えた結果、クイズ形式にするという結論に至りました。<br>

近年はゲームへの見方も変わってきており、ただの娯楽ではなく、ゲームを通じて何かしらの成長を与えるものも増えてきています。<br>

今回はその流れに乗らせて頂きました 🙂

<br><br>

## UI デザイン

今回のプロダクトのコンセプトでもある **「子供の頃のようなワクワク」** をより解像度高めると、
<br><br>

「へー！まだまだ地球上にはこんな世界があるんだ！
世界って広いな〜ワクワク 😊」
<br><br>

みたいなニュアンスだと思います。
<br><br><br>

この感覚って具体的に、子供の頃のどういった場面で感じるのか？と考えると、
<br>

```
「国語辞典や図鑑を意味もなくパラパラ見てる時間」
```

が最も近いと思いました。
<br><br><br>

あることを調べるために本を開いていると、たまたま隣にある単語が目に入り、気がついたらページをパラパラめくって時間が過ぎちゃう...
<br>

といった体験、一度はしたことがあると思います。
<br>

時間が過ぎちゃったことに後悔すると同時に、知的好奇心が満たされることによる満足感もあるという、何とも言えない気持ち。
<br><br>

この体験を QuizWiki でも感じてほしいと思い、
<br>

**「図書館で辞書をパラパラとめくっていく」**
<br>

といった世界観をデザインで表現しました。
<br><br><br>

Wikipedia はネット版辞書とも言われているので、そういったコンテンツとのマッチもしていると思います。
<br>

これらの背景から、実際のデザインはこのようになりました。
<br>

![image](https://user-images.githubusercontent.com/54055746/129444376-85866c8b-88a7-41a9-97f1-05fb7a6cc331.png)

<br><br>
![image](https://user-images.githubusercontent.com/54055746/129444393-0f979898-6477-482e-acd5-56a6c0802ab3.png)

<br><br>
![image](https://user-images.githubusercontent.com/54055746/129444395-f084bb7a-01d0-48c2-8b27-2e38c6ccd4ea.png)

<br><br>

以上が、僕がこのサービスを作った背景であり、届けたい想いです。
<br><br>

もしここまでの話を聞いて、このサービスに興味を持ちましたら、ぜひ遊んでみてください！
<br>

ログイン等なく気軽にプレイできることもこのサービスの魅力の一つです ☺️
