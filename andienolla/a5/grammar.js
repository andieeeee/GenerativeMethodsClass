let coffeeGrammar = {
	 "coffeeServing" : ["with a dollop of #cream#", "as a #cream# latte", "topped with #cream# foam", "black", "as a pourover", "clover-style", "French Press", "in a teacup", "in a moka pot", "in a teapot", "in a pile of discarded Keurig cups", "with #cream#"],
    "coffeeServingInstruction" : ["Served #coffeeServing#", "Available #coffeeServing# or #coffeeServing#", "Try it #coffeeServing#", "Available #coffeeServing#"],
    "coffeeType" : ["arabica", "decaf", "mocha", "grind", "espresso", "french roast", "dark roast", "light roast", "#flavorMod# roast", "extra #flavorMod# roast"],
    
    "coffeeName" : ["#hpn# #coffeeType.capitalizeAll#", "#landscapeComplex.capitalizeAll# #coffeeType.capitalizeAll#", "#name#'s #coffeeType.capitalizeAll#"],
    "coffeeDesc" : ["#flavorAttr.capitalize#.  #coffeeServingInstruction#.", "#flavorAttr.capitalize# and #flavorAttr#.  #coffeeServingInstruction#."],
     "landscapeAdj" : ["rainy", "windy", "old", "grey", "dark", "creaky", "quiet", "silent", "fair", "shadow", "verdant", "sunny", "far", "near", "dry", "dead"],
    "landscapeFeature" : ["river", "mountain", "forest", "mines", "pines", "falls", "glen", "garden", "mansion", "village", "isle", "bayou", "swamp", "hill", "creek", "rainforest", "desert"],
    "landscapeComplex" : ["#landscapeAdj# #landscapeFeature#"],

     "flavorAttr" : ["#hint.a# of #flavor#", "#texture# on your tongue", "#flavorMod# and #flavorMod# as #memory#", "it is #flavorMod# and #flavorMod# as #memory#", "#flavor#, #flavor#, and #flavor# #hint.s#", "#flavorMod# #flavor#, with #hint.s# of #flavor#", "#flavor# #blendsWith# #flavorMod# #flavor#", "#flavorMod# #flavor# #blendsWith# #flavorMod# #flavor#", "#flavorMod# #flavor#", "#flavorMod# #fruit.s#", "#hint.s# of #flavorMod# #flavor#", "#flavorMod# and #flavorMod#", "#flavorMod# #flavor# #hint.s#", "it smells of #memory#", "it reminds you of  #memory#", "you smell #memory#", "you remember #memory#", "you taste #memory#", "all you can taste is #memory#", "you #areDrowningIn# #flavorMod# #flavor#"],
     "flavorMod" : ["special", "dark", "light", "bitter", "burnt", "savory", "flavorful", "aromatic", "fermented", "herbal", "pleasant", "harsh", "smoky", "sweet", "fresh", "refreshing", "somber", "bright", "perky", "sullen", "acidic", "sour", "peaty", "juicy", "perfumed", "buttery", "lush", "brisk", "strong", "weak", "tart", "tangy", "bold", "overpowering", "light", "faint", "subtle"],
    "flavor" : ["spearmint", "tobacco", "agave", "coffee", "cocoa powder", "chocolate", "sea salt", "kosher salt", "brown sugar", "cinnamon", "motor oil", "lavender", "spice", "black pepper", "cardamom", "pumpkin spice", "caramel", "toffee", "butterscotch", "peppermint", "walnut", "acid", "pear", "citrus", "grenadine", "smoke", "iodine", "coriander", "cinnamon", "acid", "salt", "sugar", "maple", "coffee", "whiskey", "regret", "sorrow", "blood", "gasoline", "grass", "cigarettes", "pine", "tar", "saltwater", "rosewater", "jasmine", "espresso", "green apple", "#fruit#", "#fruit#", "#fruit#", "#fruit#", "#fruit#"],

}

let catGrammar = {
    "emotion" : ["soothed", "comfortable", "snug", "cozy", "relaxed"],
    "location" : ["couch", "big blue chair", "bed", "floor", "rug", "loveseat", "window seat", "hammock", "recliner in the library"],
    "comfyThing" : ["a warm cup of tea", "your favorite book", "the plushiest pillows", "a snuggly blanket", "calming, quiet music playing", "the scent of cookies wafting from", "a lovely scented candle burning"],
    "cuddleDesc" : ["You cuddle with Rosie on the #location#, with #comfyThing# nearby. You are both #emotion#."],
    
    "toy" : ["her favorite wool ball", "the rainbow catnip toy", "a blue catnip mouse", "the donut on a stick", "a random piece of trash", "a crinkly ball", "shadows"],
    "reaction" : ["is unamused", "runs around vigorously", "meows loudly", "stares", "stretches, then runs to her food bowl", "slowly blinks at you", "goes and plays with Kitty"],
    "playDesc" : ["You try to play with Rosie using #toy#. She #reaction#."],
    
    "food" : ["a treat", "some dry kibble", "a little piece of fish", "some chicken from your plate", "a wheat thin"],
    "reacts" : ["begrudgingly obliges", "gobbles it down", "nibbles curiously"],
    "foodDesc" : ["You try to feed Rosie #food#. She #reacts#."]
    
}