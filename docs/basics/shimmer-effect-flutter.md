---
sidebar_position: 1
---

# shimmer effect flutter

**The Shimmer package** comes with a component called `Shimmer` that can be used to add `shimmer` effects to UI elements. For example, you can use `Shimmer` to show a shine when loading data or UI elements to improve the user experience.

Certainly! Here's an explanation with code snippets in English for achieving a shimmer effect using the shimmer package in a Flutter application. You can copy and paste the code into your Flutter project in CodeSandbox.


### user interface
- `Use shimmer package`

```jsx title="bash"
flutter pub add shimmer
```

<!-- - `src/pages/foo.md` → `localhost:3000/foo` -->

**Then you can use it in your Flutter code as follows:**

```jsx title="dart"
import 'package:shimmer/shimmer.dart';
```

```
Shimmer.fromColors(
  baseColor: Colors.grey[300],
  highlightColor: Colors.grey[100],
  child: YourWidget(),
)
```

Where YourWidget() is the element to which you want to add the shimmer effect.


## Using the Flutter AnimatedBackground package:

You can use a package like flutter_animated_background to add live effects and glitter to your overall app background.

Add the package to your pubspec.yaml file:

```mdx title="dependencies:"
  flutter_animated_background: ^2.0.0
```
**Then configure the effect on the main application screen :**

```
import 'package:flutter_animated_background/flutter_animated_background.dart';
```

```
class YourApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: AnimatedBackground(
          behaviour: yourBehaviour(),
          vsync: this,
          child: YourWidget(),
        ),
      ),
    );
  }
}
```

You can adjust **yourBehaviour()** and **YourWidget()** according to your application's needs. Make sure to read the package documentation and customize the code according to the design requirements of your application.

**Thank you from the ❤️ from the Arab Apps team**

