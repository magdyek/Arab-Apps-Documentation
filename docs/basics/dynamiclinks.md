---
sidebar_position: 2
---

# Flutter. Dynamic Link

**Here's an explanation of how to add Dynamic Links in a Flutter application:**

### Install Firebase Package:

- `Add the Firebase package to your pubspec.yaml file:`

```jsx title="yaml - dependencies:"
  firebase_dynamic_links: ^2.0.0
  firebase_core: ^1.10.6
```
Run flutter pub get to install the packages.

## Configure Firebase:

- `In your main.dart file, configure Firebase using the API Key:`


```jsx title="dart"
import 'package:firebase_core/firebase_core.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MyApp());
}
```
## Create Dynamic Link:
- `Use FirebaseDynamicLinks to create dynamic links in your app. You can do this anywhere, such as in a specific screen or when the app starts.`


```jsx title="dart"
import 'package:firebase_dynamic_links/firebase_dynamic_links.dart';

Future<void> initDynamicLinks() async {
  final PendingDynamicLinkData data =
      await FirebaseDynamicLinks.instance.getInitialLink();
  handleDynamicLink(data);

  FirebaseDynamicLinks.instance.onLink(
      onSuccess: (PendingDynamicLinkData dynamicLink) async {
    handleDynamicLink(dynamicLink);
  }, onError: (OnLinkErrorException e) async {
    print('Error: ${e.message}');
  });
}

void handleDynamicLink(PendingDynamicLinkData data) {
  final Uri deepLink = data?.link;

  if (deepLink != null) {
    // Parse the link and perform the required actions
    print('Deep Link: $deepLink');
  }
}

```
## Implement Dynamic Link Check:
- `Call initDynamicLinks() in main() or at an appropriate place in your app.`

```jsx title="dart"
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  initDynamicLinks();
  runApp(MyApp());
}
```
handleDynamicLink should be called when the app is opened via a dynamic link.
These are the basic steps to add Dynamic Links to a Flutter app using Firebase. You can customize the actions inside **handleDynamicLink** based on your app's requirements.







**Thank you from the ❤️ from the Arab Apps team**

