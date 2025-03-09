import { MatchersV3 } from '@pact-foundation/pact';

export interface IPet {
    id: number;
    name: string | MatchersV3.Matcher<string>;
    status: string | MatchersV3.ProviderStateInjectedValue<string>;
}
