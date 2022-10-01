package io.quarkus.workshop.superheroes.fight.health;

import javax.inject.Inject;

import org.eclipse.microprofile.health.HealthCheck;
import org.eclipse.microprofile.health.HealthCheckResponse;
import org.eclipse.microprofile.health.Liveness;

import io.quarkus.workshop.superheroes.fight.FightResource;


@Liveness
public class PingFightResourceHealthCheck implements HealthCheck  {
	@Inject
    FightResource fightResource;

    @Override
    public HealthCheckResponse call() {
        String response = fightResource.hello();
        return HealthCheckResponse.named("Ping Fight REST Endpoint").withData("Response", response).up().build();
    }
}
