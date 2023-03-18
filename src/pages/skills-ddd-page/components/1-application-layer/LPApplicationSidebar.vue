<template>
<div class="lp-application-sidebar">
  Application logic coordinates the requirements of a feature.
  In this case, we retrieve a Twitch user, award points to them,
  and save to the DB.<br /><br />
  The actual mutation of the Twitch user, and the underlying data,
  is handled by the Domain Layer.<br /><br />
  The code is easy to read since it targets a single domain.
</div>
</template>

<style>
.lp-application-sidebar {
  max-width: 21rem;
}

@media (min-width: 768px) {
  .lp-application-sidebar {
    max-width: 33rem;
  }
}
</style>
