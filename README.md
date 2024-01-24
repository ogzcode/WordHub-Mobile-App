# WordHub Mobile App

WordHub Mobile App, Expo React Native ve Supabase kullanarak geliştirdiğim ingilizce kelimeleri öğrenme ve yönetme uygulamasıdır. Bu uygulama, kullanıcılara kelime arama, kayıtlı kelimeleri yönetme ve öğrenme listesi oluşturma imkanı sunar. Ayrıca kelimelere örnek cümleler de eklenebilir. Kullanıcının öğrenme sürecini eğlenceli hale getirebilecek 1 oyun da bulunmaktadır.

## Kullanıcı Arayüzü

Uygulamanın kullanıcı arayüzü aşağıdaki bölümlerden oluşmaktadır:

- **Arama:** Kelimeleri aramak için kullanılan bölüm. Arama sonuçları, kelimenin anlamı, örnek cümleleri ve diğer bilgileri içerir.
- **Kayıtlı Kelimeler:** Kullanıcının kaydettiği kelimeleri listeler. Kelimeleri düzenleme, silme veya örnek cümle ekleme imkanı sunar.
- **Oyun:** Kullanıcının kaydettiği kelimeler ile alıştırma yapabileceği bir oyun.

## Teknik Detaylar

Uygulama, aşağıdaki teknolojileri kullanarak geliştirilmiştir:

- **Expo React Native:** Uygulama arayüzünü oluşturmak için Expo React Native kullanılmıştır.
- **Redux Toolkit:** Uygulama state yönetimi için Redux Toolkit kullanılmıştır.
- **React Natigation:** Ekranlar arasında yönlendirmeleri oluşturmak için kullanılmıştır.
- **Supabase:** Veritabanını oluşturmak ve yönetmek için Supabase kullanılmıştır.
- **API:** [Free Dictionary API](https://dictionaryapi.dev/) kelimeler için kullanılmıştır.

## Kurulum

Uygulamayı yerel olarak çalıştırmak için şu adımları takip edin:

1. Supabase hesabı oluşturun ve bir veritabanı oluşturun.
2. `.env` dosyasını oluşturun ve aşağıdaki değerleri ekleyin:

    ```env
    EXPO_PUBLIC_SUPABASE_URL=https://[sizin-supabase-url'iniz]
    EXPO_PUBLIC_SUPABASE_KEY=[sizin-supabase-key'iniz]
    ```

3. `npm install` komutunu çalıştırın.
4. `npx expo start android` komutunu çalıştırın.

Uygulamayı Emülatörünüzde Expo uygulamasında çalıştırabilirsiniz.
> Uygulama Pixel 3 Android SDK API 31 de test edilmiştir.


### Video

## Lisans

Uygulama, MIT lisansı altında yayınlanmaktadır.
