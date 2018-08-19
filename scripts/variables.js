var sampleText = `
Introduction:
A core aspect of human experience is our pursuit of novelty. There is something tantalizing about new pleasures, sensations, and experiences that feels hard-coded into how we operate. “Variety is the spice of life” and all that. Conversely, things which were once new eventually lose their shine over time, and our search for novelty continues. Things which once enamored us are left on the wayside as our attention is captured by shinier, newer things. “The novelty has faded” and all that.

A few examples to drive the point home:
Songs which sounded so entrancing upon the first few listenings become dull after being put on repeat.
Foods which were so delicious during the first few tastings become bland after being eaten day after day.
Clothes which looked so beautiful when initially worn fade into yet another outfit after being worn over and over.

Repetition dulls us.

In psychology, this phenomenon whereby repeated exposure to a stimulus leads to a decreased response is called habituation. (This is rather unfortunate, as I’ve become accustomed to using “habituate” to refer to the act of making something a habit.) This general pattern of a reduced response is quite ubiquitous across nature. For example, animals which leap into a prepared state upon hearing a loud noise soon grow to ignore it if the noise isn’t paired with actual danger.

In short, it’s a basic form of learning.

From a survival standpoint, a bias towards newness is reasonable. Things in our environment which did not change, e.g. trees, shrubs, or familiar tribe members, likely presented less of a threat than new additions, e.g. fresh tracks, gathering storm clouds, or a stranger in our midst. Had we not had such a filter for newness, our thoughts might have looked like:

“Oh wow, that’s new! Look at that majestic tree! It looks just as good as it did yesterday! Oh wow, that’s new! Look at that lush grass! It’s so fluffy! Oh wow, that’s new! Look at that tiger. It’s so— ”

Constantly taking note of everything in your environment is costly; focusing on just what’s new is an effective optimization that often doesn’t require much of a trade-off. Yet, despite it’s useful roots, I think that fading novelty is also responsible some of the difficulties we experience with learning and self-improvement. It also presents several challenges from a philosophical perspective.
`;

var block1 = `
<div class="grid-container">
  <div>
    <div class="text">
      <p>
`;

var block2 =`
</p>
</div>
<div class="summary-container hidden">
<textarea class="summary-input" data-autoresize rows="2"></textarea>
</div>
</div>

<div class="button-holder">
<div class="icon-button minimize-button"></div>
<div class="icon-button preview"
data-balloon-length="large"
data-balloon=""
data-balloon-pos="bottom">
  <i class="fas fa-search"></i>
</div>
</div>
</div>
`;
