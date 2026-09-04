# Friday Night Incident

## Timeline

- Friday 5:52 pm: A wrong database URL was deployed.
- Saturday 9:15 am: The team found the problem.
- Saturday 11:40 am: Checkout was working again.

## Causes

- The deployment was manual.
- There were no tests before production.
- There was no alert when checkout failed.
- There was no easy rollback.

## Actions

1. Add automated tests before deployment.
   This can prevent configuration mistakes.

2. Add monitoring and alerts.
   The team can find problems faster.

3. Add an automatic rollback.
   The service can be restored faster.

## DORA metrics

- Missing tests increased the Change Failure Rate.
- No alerts increased Time to Restore (MTTR).
- No rollback also increased MTTR.
- Manual deployment can slow down Deployment Frequency.

## Conclusion

The problem came from missing tools and processes, not from one person.